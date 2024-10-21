import { Grid, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Friday, Monday, Saturday, Sun, Sunday, Thursday, Tuesday } from '../assets/Icons'

const  Weather = ({bg, city}) => {
  return (
    <div id='weatherContainer'>
        <div id="weather">
            <HStack>
                <HStack id="wHeader">
                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                        <Sun />
                        <Text >29 <span>°C</span></Text>
                        <VStack>
                            <span>Precipitation: 2%</span>
                            <span>Humidity: 70%</span>
                            <span>Wind: 3 Km/H</span>
                        </VStack>
                    </HStack>
                    <VStack>
                        <span>New York, NY</span>
                        <span>Wednesday 04:00</span>
                    </VStack>
                </HStack>
                <Image src={bg} alt={'New York Weather Chart'} />
                <Grid id="wDays">
                    <Day key={'Tue'} day={'Tue'} Svg={Sun} />
                    <Day key={'Wed'} day={'Wed'} Svg={Saturday} />
                    <Day key={'Thu'} day={'Thu'} Svg={Thursday} />
                    <Day key={'Fri'} day={'Fri'} Svg={Friday} />
                    <Day key={'Sat'} day={'Sat'} Svg={Saturday} />
                    <Day key={'Sun'} day={'Sun'} Svg={Sunday} />
                    <Day key={'Mon'} day={'Mon'} Svg={Monday} />
                    <Day key={'Tue'} day={'Tue'} Svg={Tuesday} />
                </Grid>
            </HStack>

            <HStack>
                {
                    city.map((i, index) => 
                        index === 0 && (
                            <City key={index} bg={i.bg} image={i.image} precipitation={i.precipitation} humidity={i.humidity} wind={i.wind} name={i.name} date={i.date} temp={i.temp} Svg={Sun} />
                        ) ||
                        index === 1 && (
                            <City key={index} bg={i.bg} image={i.image} precipitation={i.precipitation} humidity={i.humidity} wind={i.wind} name={i.name} date={i.date} temp={i.temp} Svg={Tuesday} />
                        ) ||
                        index === 2 && (
                            <City key={index} bg={i.bg} image={i.image} precipitation={i.precipitation} humidity={i.humidity} wind={i.wind} name={i.name} date={i.date} temp={i.temp} Svg={Monday} />
                        ) ||
                        index === 3 && (
                            <City key={index} bg={i.bg} image={i.image} precipitation={i.precipitation} humidity={i.humidity} wind={i.wind} name={i.name} date={i.date} temp={i.temp} Svg={Saturday} />
                        )
                    )
                }
            </HStack>
        </div>
    </div>
  )
}

const Day = ({day, Svg}) => (
    <VStack id="day">
        <span>{day}</span>
        <Svg />
        <p>
            <span>29°</span>
            <span>20°</span>
        </p>
    </VStack>
)

const City = ({ precipitation, humidity, wind, name, date, temp, Svg, image, bg}) => (
    <VStack id="city"
        backgroundImage={image}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
    >
        <Image src={bg} />
        <VStack>
            <HStack id="cHeader">
                <VStack justifyContent={'space-between'} alignItems={'center'}>
                    <span>Precipitation: {precipitation}%</span>
                    <span>Humidity: {humidity}%</span>
                    <span>Wind: {wind} Km/H</span>
                </VStack>
                <VStack>
                    <span>{name}</span>
                    <span>{date}</span>
                </VStack>
            </HStack>
            
            <HStack id="wTemp">
                <Svg />
                <Text >{temp} <span>°C</span></Text>
            </HStack>
        </VStack>
    </VStack>
)

export default Weather