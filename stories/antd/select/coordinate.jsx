import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const App = () => {
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

  return (
    <>
      <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  );
};

storiesOf('antd/select', module).add('coordinate', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.</p>
<p>Using the <a href="/components/cascader">Cascader</a> component is strongly recommended instead as it is more flexible and capable.</p></>) } });