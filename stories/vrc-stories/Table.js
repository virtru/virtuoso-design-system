/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useLayoutEffect, useReducer, useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Table, TBody, TD, TH, THead, TR } from '@';

const StoryTHead = ({
  onClickSelect = () => {},
  onClickAddress = () => {},
  isSelected = false,
  addressSort,
}) => (
  <THead>
    <TR>
      <TH>
        <input type="checkbox" onClick={onClickSelect} checked={isSelected} />
      </TH>
      <TH>Address</TH>
      <TH>Type</TH>
      <TH onClick={onClickAddress} sorting={addressSort}>
        A Really Long Header for Updated
      </TH>
      <TH>Status</TH>
    </TR>
  </THead>
);

const StoryTR = ({ data, isSelected = false, highlightOnHover = false, onClick }) => (
  <TR onClick={onClick} highlightOnHover={highlightOnHover}>
    {onClick && (
      <TD>
        <input type="checkbox" checked={isSelected} readOnly />
      </TD>
    )}
    <TD>{data.address}</TD>
    <TD>{data.type}</TD>
    <TD>{data.updated}</TD>
    <TD>{data.status}</TD>
  </TR>
);

const Inactive = () => <span style={{ fontWeight: 'bold', color: 'red' }}>Inactive</span>;

const data = [
  { address: '01.02.03.04.05', type: 'IP', updated: '2019-07-02', status: <Inactive /> },
  { address: '01.02.03.04', type: 'IP', updated: '2019-07-01', status: <Inactive /> },
  {
    address: '01.02.03.04.05 - 01.02.03.04.05',
    type: 'IP Range',
    updated: '2019-07-04',
    status: <Inactive />,
  },
  {
    address: '01.02.03.04.05 / 40',
    type: 'CIDR block',
    updated: '2019-07-03',
    status: <Inactive />,
  },
];

const makeLookup = (set, key, valueFn = (x) => x) => {
  const lookup = {};
  set.forEach((element) => {
    const name = element[key];
    lookup[name] = valueFn(element);
  });
  return lookup;
};

const selectedLookup = makeLookup(data, 'address', () => false);

const actionTypes = {
  TOGGLE: 'TOGGLE',
  ALL_ON: 'ALL_ON',
  ALL_OFF: 'ALL_OFF',
};

const toggleSelectedReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.TOGGLE:
      newState[action.address] = !newState[action.address];
      return newState;
    case actionTypes.ALL_ON:
      return makeLookup(data, 'address', () => true);
    case actionTypes.ALL_OFF:
      return makeLookup(data, 'address', () => false);
    default:
      throw new Error();
  }
};

const createActions = (dispatch) => ({
  toggle: (address) => dispatch({ type: actionTypes.TOGGLE, address }),
  allOn: () => dispatch({ type: actionTypes.ALL_ON }),
  allOff: () => dispatch({ type: actionTypes.ALL_OFF }),
});

const { SORT_OFF, SORT_ASC, SORT_DESC } = TH.SORT_DIRECTION;
const sortOrder = {
  [SORT_OFF]: SORT_ASC,
  [SORT_DESC]: SORT_OFF,
  [SORT_ASC]: SORT_DESC,
};

storiesOf('Table', module)
  .lokiSkip('default', () => {
    const [selectedState, dispatch] = useReducer(toggleSelectedReducer, selectedLookup);
    const [sortDirection, setSortDirection] = useState(TH.SORT_DIRECTION.SORT_OFF);
    const actions = createActions(dispatch);

    const mode = select('Interaction type', ['none', 'hover', 'clickable'], 'none');
    const isHoverable = mode === 'hover';
    const isClickable = mode === 'clickable';
    const onClick = isClickable ? (d) => () => actions.toggle(d.address) : () => undefined;
    const isSortable = boolean('Sortable on Address', false);
    const isErrorShown = boolean('Table Error', false);

    const isAllSelected = Object.values(selectedState).every((isTrue) => isTrue);
    const changeSort = () => setSortDirection(sortOrder[sortDirection]);
    const sortedData = [...data];

    if (isSortable && sortDirection === SORT_ASC) {
      sortedData.sort((d1, d2) => (d1.address < d2.address ? -1 : 1));
    } else if (isSortable && sortDirection === SORT_DESC) {
      sortedData.sort((d1, d2) => (d1.address > d2.address ? -1 : 1));
    }

    return (
      <div style={{ width: '500px' }}>
        <Table>
          {isClickable ? (
            <StoryTHead
              isSelected={isAllSelected}
              onClickSelect={isAllSelected ? actions.allOff : actions.allOn}
              addressSort={isSortable ? sortDirection : undefined}
              onClickAddress={isSortable ? changeSort : undefined}
            />
          ) : (
            <THead>
              <TR>
                <TH
                  onClick={isSortable ? changeSort : undefined}
                  sorting={isSortable ? sortDirection : undefined}
                >
                  Address
                </TH>
                <TH>Type</TH>
                <TH>Updated</TH>
                <TH>Status</TH>
              </TR>
            </THead>
          )}
          <TBody>
            {isErrorShown && (
              <TR>
                <TD colSpan={4}>
                  <div
                    style={{
                      margin: '10px 0',
                      border: '1px solid red',
                      padding: '10px',
                      color: 'red',
                      borderRadius: '3px',
                    }}
                  >
                    Your current IP Address: 01.02.03.04 is not whitelisted
                  </div>
                </TD>
              </TR>
            )}
            {sortedData.map((d) => (
              <StoryTR
                key={d.address}
                data={d}
                isSelected={selectedState[d.address]}
                onClick={onClick(d)}
                highlightOnHover={isHoverable}
              />
            ))}
          </TBody>
        </Table>
      </div>
    );
  })
  .add('basic', () => (
    <div style={{ width: '500px' }}>
      <Table>
        <THead>
          <TR>
            <TH>Address</TH>
            <TH>Type</TH>
            <TH>Updated</TH>
            <TH>Status</TH>
          </TR>
        </THead>
        <TBody>
          {data.map((d) => (
            <StoryTR key={d.address} data={d} />
          ))}
        </TBody>
      </Table>
    </div>
  ))
  .add('highlights', () => (
    <div style={{ width: '500px' }}>
      <Table>
        <THead>
          <TR>
            <TH>Address</TH>
            <TH>Type</TH>
            <TH>Updated</TH>
            <TH>Status</TH>
          </TR>
        </THead>
        <TBody>
          {data.map((d) => (
            <StoryTR key={d.address} data={d} highlightOnHover />
          ))}
        </TBody>
      </Table>
    </div>
  ))
  .add('highlights with warning', () => (
    <div style={{ width: '500px' }}>
      <Table>
        <THead>
          <TR>
            <TH>Address</TH>
            <TH>Type</TH>
            <TH>Updated</TH>
            <TH>Status</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD colSpan={4}>
              <div
                style={{
                  margin: '10px 0',
                  border: '1px solid red',
                  padding: '10px',
                  color: 'red',
                  borderRadius: '3px',
                }}
              >
                Your current IP Address: 01.02.03.04 is not whitelisted
              </div>
            </TD>
          </TR>
          {data.map((d) => (
            <StoryTR key={d.address} data={d} highlightOnHover />
          ))}
        </TBody>
      </Table>
    </div>
  ))
  .add('sort + select', () => {
    const [selectedState, dispatch] = useReducer(toggleSelectedReducer, selectedLookup);
    const [sortDirection, setSortDirection] = useState(TH.SORT_DIRECTION.SORT_OFF);
    const actions = createActions(dispatch);
    const isAllSelected = Object.values(selectedState).every((isTrue) => isTrue);
    const changeSort = () => setSortDirection(sortOrder[sortDirection]);
    const sortedData = [...data];

    if (sortDirection === SORT_ASC) {
      sortedData.sort((d1, d2) => (d1.address < d2.address ? -1 : 1));
    } else if (sortDirection === SORT_DESC) {
      sortedData.sort((d1, d2) => (d1.address > d2.address ? -1 : 1));
    }

    return (
      <div style={{ width: '500px' }}>
        <Table>
          <StoryTHead
            isSelected={isAllSelected}
            onClickSelect={isAllSelected ? actions.allOff : actions.allOn}
            addressSort={sortDirection}
            onClickAddress={changeSort}
          />
          <TBody>
            {sortedData.map((d) => (
              <StoryTR
                key={d.address}
                data={d}
                isSelected={selectedState[d.address]}
                onClick={() => actions.toggle(d.address)}
              />
            ))}
          </TBody>
        </Table>
      </div>
    );
  })
  .add('focused row', () => {
    const [row] = data;
    const rowRef = useRef();

    useLayoutEffect(() => {
      rowRef.current.focus();
    }, []);

    return (
      <div style={{ width: '500px' }}>
        <Table>
          <THead>
            <TR>
              <TH>Address</TH>
              <TH>Type</TH>
              <TH>Updated</TH>
              <TH>Status</TH>
            </TR>
          </THead>
          <TBody>
            <TR highlightOnHover ref={rowRef} onClick={() => {}}>
              <TD>{row.address}</TD>
              <TD>{row.type}</TD>
              <TD>{row.updated}</TD>
              <TD>{row.status}</TD>
            </TR>
          </TBody>
        </Table>
      </div>
    );
  });
