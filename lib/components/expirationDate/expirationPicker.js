import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Input, Row, Col, Select } from '@';

import styles from './expirationPicker.css';

const { Option } = Select;

const ExpirationPicker = React.memo(({ getTime, isModal, expDateTime }) => {
  const [number, setNumber] = useState('1');
  const [type, setType] = useState(0);
  const [formattedString, setFormatedString] = useState('');
  const [shouldUpdate, setShouldUpdate] = useState(!isModal || (isModal && !expDateTime));

  const selectValues = [
    { label: 'minutes', value: 'minutes' },
    { label: 'hours', value: 'hours' },
    { label: 'days', value: 'days' },
    { label: 'weeks', value: 'weeks' },
    { label: 'months', value: 'months' },
    { label: 'years', value: 'years' },
  ];

  const updateExpirationDate = () => {
    if (number > 0) {
      const unit = selectValues[type].value;
      const time = moment().add(number, unit);
      if (moment(time).isValid()) {
        setFormatedString(time.format('dddd, MMM D, YYYY @ h:mm a'));
        getTime(time);
      }
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const inputtedValue = e.target.value.trim();
    if (inputtedValue.length > 1 && inputtedValue.startsWith('0') && inputtedValue[1] !== '.')
      return;
    // eslint-disable-next-line no-restricted-globals,no-magic-numbers
    if (isNaN(inputtedValue) || inputtedValue.length > 4) return;
    setNumber(inputtedValue);
  };

  const handleSelectChange = (value) => {
    const ind = selectValues.findIndex((obj) => obj.value === value);
    setType(ind);
  };

  useEffect(() => {
    if (shouldUpdate) {
      updateExpirationDate();
    } else {
      setShouldUpdate(true);
    }
  }, [number, type]);

  return (
    <div className={styles.wrap}>
      <Input.Group>
        <Row gutter={8}>
          <Col span={6}>
            <Input className={styles.input} onChange={handleInputChange} value={number} />
          </Col>
          <Col span={10}>
            <Select
              defaultValue={selectValues[0].value}
              onChange={handleSelectChange}
              className={styles.select}
            >
              {selectValues.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </Input.Group>
      {!!number.length && (
        <div className={styles.formattedText} data-testid="formatted-string">
          {formattedString}
        </div>
      )}
    </div>
  );
});

ExpirationPicker.propTypes = {
  getTime: PropTypes.func.isRequired,
  isModal: PropTypes.bool,
  expDateTime: PropTypes.string,
};

ExpirationPicker.defaultProps = {
  isModal: false,
  expDateTime: '',
};

export default ExpirationPicker;
