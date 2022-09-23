import { Container, Input, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [time1, setTime1] = useState();
  const [distance1, setDistance1] = useState();
  return (
    <div className={styles.container}>
      <Head>
        <title>Baseball Speed</title>
      </Head>

      <Container>
        <Text
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Welcome to Baseball Speed Calculator!
        </Text>
        <Text>
          Input time and distance. Add +3 mph to final calculation to account
          for realistic calculation.
        </Text>
        <Spacer />
        <Input
          css={{ width: "100%" }}
          size="xl"
          placeholder="Time, in milliseconds"
          label="Time (ms)"
          value={time1}
          onChange={(e) => {
            setTime1(e.target.value);
          }}
        ></Input>
        <Spacer />
        <Input
          css={{ width: "100%" }}
          placeholder="Distance, in feet"
          size="xl"
          value={distance1}
          label="Distance (ft)"
          onChange={(e) => {
            setDistance1(e.target.value);
          }}
        ></Input>
        <Spacer />
        <Container style={{ textAlign: "center" }}>
          <Text
            h1
            size={30}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            {time1 > 0 && distance1 > 0
              ? Math.round(((distance1 * 681.6632) / time1) * 100) / 100 +
                " mph"
              : ""}
          </Text>
          <Text h3>{time1 > 0 && distance1 > 0 ? "+ 3 mph" : ""}</Text>
          <Text
            size={80}
            css={{
              textGradient: "45deg, $green600 -20%, $blue600 100%",
            }}
            weight="bold"
          >
            {time1 > 0 && distance1 > 0
              ? Math.round(((distance1 * 681.6632) / time1) * 100) / 100 +
                3 +
                " mph"
              : ""}
          </Text>
        </Container>
        <Spacer />
        <Text h4>
          Factors that may deflate this calculation ~3 mph include the diagonal
          trajectory of pitch and air resistance (this is a calculation of
          average speed).
        </Text>
      </Container>
    </div>
  );
}
