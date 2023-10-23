import React, { useCallback, useRef, useState } from 'react'
import { FlatList, View, Text, Image, Dimensions } from 'react-native'
import { CutomButton } from '../CutomButton';
import { CustomLink } from '../CustomLink/CustomLink';
import styles from './Styles';

const { width: windowWidth } = Dimensions.get("window");

const slideList = [
    {
        id: 1,
        image: "https://www.infobae.com/new-resizer/bBaSUz07JCAtgcMNfEuSw0x-PUc=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/77QSZE3TNJDTVIQMPDO33Z4YUM.jpg",
        name: "Chef Certificado",
        description: "Cocine la comida como su chef personal."
    },
    {
        id: 2,
        image: "https://www.camarero10.com/wp-content/uploads/2021/04/imagen-repartidor-guia-delivery.png",
        name: "Envio rapido",
        description: "entregaremos su pedido lo más rápido y eficientemente posible"
    },
    {
        id: 3,
        image: "https://d100mj7v0l85u5.cloudfront.net/s3fs-public/styles/webp/public/2023-03/marca-de-comidas.jpg.webp?itok=RHUA_ora",
        name: "Los mejores de la zona",
        description: "Los mejores alimentos de la zona"
    }
]

interface Props {
    onPress: () => void
}
const CustomCarousel = ({ onPress }: Props) => {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    let listView: any;

    type ItemProps = { name: string, description: string, image: string }

    const Slide = ({ description, image, name }: ItemProps) => (
        <View style={styles.slide}>
            <Image source={{ uri: image }} style={styles.slideImage}></Image>
            <Text style={styles.slideTitle}>{name}</Text>
            <Text style={styles.slideSubtitle}>{description}</Text>
            <Pagination index={index}></Pagination>
        </View>
    )
    const nextPress = (index: any) => {
        if (index <= 2) {
            listView.scrollToIndex({
                animated: true,
                index: index + 1
            });
        }
    };
    const skipPress = () => {
        onPress()
    }
    const Pagination = (index: any) => {
        return (
            <View style={styles.pagination} pointerEvents="none">
                {slideList.map((_, i) => {
                    console.log(i)
                    console.log(index)
                    console.log(typeof index.index)
                    return (
                        <View
                            key={i}
                            style={[
                                styles.paginationDot,
                                index.index == i
                                    ? styles.paginationDotActive
                                    : styles.paginationDotInactive,
                            ]}
                        />
                    );
                })}
            </View>
        );
    }
    const onScroll = useCallback((event: any) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback((s: any) => String(s.id), []),
        getItemLayout: useCallback(
            (_: any, index: any) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };
    const renderButtons = () => {
        if (index == 2) {
            return (
                <CutomButton title='Empezar' onPress={() => skipPress()} />
            );
        } else {
            return (
                <CutomButton title='Siguiente' onPress={() => nextPress(index)} />
            );
        }
    }
    return (
        <View>
            <FlatList
                ref={(ref) => listView = ref}
                data={slideList}
                style={styles.carousel}
                renderItem={item => <Slide description={item.item.description} image={item.item.image} name={item.item.name} />}
                pagingEnabled
                horizontal
                bounces={true}
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />
            <View style={styles.containerButtons}>
                <View style={styles.containerButton}>
                    {renderButtons()}
                    <CutomButton title='Saltar' onPress={() => skipPress()} color='transparent' textColor='gray' elevation={0} borderBottom={1} />
                </View>
            </View>
        </View>
    )
}

export default CustomCarousel