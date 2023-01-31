import { Stage, Layer, Circle, Star } from 'react-konva';
import { useSpring, a } from '@react-spring/konva'
import { useEffect, useState } from 'react';

const ShapesHOC = (props) => {

    return (
        props.renderProp({
            opacity: 0.8,
            shadowColor: "white",
            shadowBlur: 20,
            shadowOpacity: 0.9,
            shadowOffsetX: -4,
            shadowOffsetY: -4,
            fill: 'white'
        })
    )
}

const Background = () => {
    const TOTAL_STARS = 2000;
    const [dims, setDims] = useState([window.innerWidth, window.innerHeight]);
    const { opacity } = useSpring({
        loop: { reverse: true },
        from: { opacity: 0.35 },
        to: { opacity: 0.65 },
        config: { duration: 800 }
    });

    useEffect(() => {
        window.addEventListener("resize", () => {
            setDims([window.innerWidth, window.innerHeight]);
        });
    }, []);

    return (
        <Stage width={dims[0]} height={dims[1]} opacity={1.4}>
            <Layer>
                {/* <ShapesHOC renderProp={(props) => <Circle x={20} y={20} radius={15} {...props} />} /> */}

                {
                    new Array(TOTAL_STARS).fill(0).map((_, idx) => <ShapesHOC key={'star-id-' + idx} renderProp={(props) =>
                        <a.Group opacity={opacity} width={dims[0]} height={dims[1]}>
                            <Star x={dims[0] * Math.random()}
                                y={dims[1] * Math.random()} numPoints={5} innerRadius={1} outerRadius={4} {...props} />
                        </a.Group>
                    }
                    />)
                }

                {/* <ShapesHOC renderProp={(props) => <Star x={dims[0] - 20}
                    y={80} numPoints={30} innerRadius={10} outerRadius={50} {...props} fill='orange' />} /> */}

            </Layer>
        </Stage>
    );
}


export default Background;