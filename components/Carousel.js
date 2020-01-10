import React, { PureComponent } from 'react';
import { Image, ScrollView, Dimensions } from 'react-native';

import { Asset } from 'expo-asset';
import { Box } from 'react-native-design-utility';
import { AppLoading } from 'expo';

const { width: WIDTH } = Dimensions.get('window');

const images = [
  require('../assets/images/groceryImg1.jpg'),
  require('../assets/images/groceryImg2.jpg')
];

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const DOT_SIZE = 8;
const TIME = 3000;

class Carousel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isReady: false
    };

    this.scrollView = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.handleScroll();
    }, TIME);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleScroll = () => {
    const newIndex = this.state.currentIndex + 1;
    const theRealImages = this.props.productDetail ? this.props.images : images;
    if (newIndex < theRealImages.length) {
      this.scrollView.current.scrollTo({
        x: newIndex * WIDTH,
        animated: true
      });

      this.setState({ currentIndex: newIndex });
    } else {
      this.scrollView.current.scrollTo({
        x: 0,
        animated: true
      });
      this.setState({ currentIndex: 0 });
    }
  };

  onScroll = event => {
    const { contentOffset } = event.nativeEvent;

    const currentIndex = Math.round(contentOffset.x / WIDTH);

    if (this.state.currentIndex !== currentIndex) {
      this.setState({ currentIndex });
    }
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../assets/images/groceryImg1.jpg'),
      require('../assets/images/groceryImg2.jpg')
    ]);
    await Promise.all([...imageAssets]);
  }

  render() {
    const theRealImages = this.props.productDetail ? this.props.images : images;
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={this.scrollView}
          scrollEventThrottle={16}
          onScroll={this.onScroll}
        >
          {theRealImages.map((img, i) => (
            <Box
              key={i}
              position="relative"
              style={{ height: this.props.height || 250, width: WIDTH }}
            >
              {!this.props.productDetail ? (
                <Image
                  source={img}
                  resizeMode="cover"
                  style={{ height: '100%', width: '100%' }}
                />
              ) : (
                <Image
                  source={{
                    uri: `https://tawsil.lotustech.dev${img.image}`
                  }}
                  resizeMode="contain"
                  style={{ height: '100%', width: '100%' }}
                />
              )}

              <Box
                position="absolute"
                dir="row"
                style={{
                  height: 400,
                  width: WIDTH,
                  backgroundColor: 'rgba(119, 166, 246, 0.1)'
                }}
                align="end"
                justify="center"
                pb="xs"
              >
                {Array.from({
                  length: this.props.productDetail ? this.props.images : images
                }).map((_, index) => (
                  <Box
                    key={index}
                    bg={
                      this.state.currentIndex === index
                        ? '#fff'
                        : 'rgba(83, 221, 150, 1)'
                    }
                    circle={DOT_SIZE}
                    mx={DOT_SIZE / 2}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </ScrollView>
      </Box>
    );
  }
}

export default Carousel;
