import type { FunctionComponent } from "react";

import styles from "../css/select.module.css";

const maps: {
  name: string;
  image: string;
}[] = [
  {
    name: "マサバ海峡大橋",
    image:
      "1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_0.png",
  },
  {
    name: "ヤガラ市場",
    image:
      "8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_0.png",
  },
  {
    name: "マテガイ放水路",
    image:
      "9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_0.png",
  },
  {
    name: "ユノハナ大渓谷",
    image:
      "35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_0.png",
  },
  {
    name: "海女美術大学",
    image:
      "40aba8b36a9439e2d670fde5b3478819ea8a94f9e503b9d783248a5716786f35_0.png",
  },
  {
    name: "スメーシーワールド",
    image:
      "61ea801fa4ed32360dcaf83986222ded46a72dbf56194acc6d0cf4659a92ba85_0.png",
  },
  {
    name: "ゴンズイ地区",
    image:
      "898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_0.png",
  },
  {
    name: "チョウザメ造船",
    image:
      "48684c69d5c5a4ffaf16b712a4895545a8d01196115d514fc878ce99863bb3e9_0.png",
  },
  {
    name: "マヒマヒリゾート＆スパ",
    image:
      "8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_0.png",
  },
  {
    name: "ザトウマーケット",
    image:
      "a8ba96c3dbd015b7bc6ea4fa067245c4e9aee62b6696cb41e02d35139dd21fe7_0.png",
  },
  {
    name: "キンメダイ美術館",
    image:
      "b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_0.png",
  },
  {
    name: "ナメロウ金属",
    image:
      "de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_0.png",
  },
];

type Props = {
  setMap: Function;
};
const Component: FunctionComponent<Props> = (props) => {
  const setMap = props.setMap;

  return (
    <div className={styles.select}>
      <select
        onChange={async (e) => {
          const map = maps.find((m) => m.name === e.target.value);
          //const imagePath = await nodecg.sendMessage("splatoon3:image");
          setMap(
            map ? { ...map, image: `../external/${map.image}` } : undefined
          );
        }}
      >
        <option key={undefined} value={undefined}>
          未選択
        </option>
        {maps.map((map) => {
          return (
            <option key={map.name} value={map.name}>
              {map.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Component;
