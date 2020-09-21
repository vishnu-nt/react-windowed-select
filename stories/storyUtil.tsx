import * as R from 'ramda';
import WindowedSelect from '../src';
import React from 'react';

export const createOptions = R.map(x => ({ value: x, label: `Option ${x}` }));

export const options1 = createOptions(R.range(1,2));
export const options50 = createOptions(R.range(1, 51));
export const options200 = createOptions(R.range(1, 201));

export const options1K = createOptions(R.range(1, 1001));
export const options5K = createOptions(R.range(1, 5001));
export const options10K = createOptions(R.range(1, 10001));

export const options100K = createOptions(R.range(1, 100001));
export const options1M = createOptions(R.range(1, 1000001));

export const groupedOptions = [
  { label: `Group 1`, options: createOptions(R.range(1, 11)) },
  { label: `Group 2`, options: createOptions(R.range(11, 21)) },
  { label: `Group 3`, options: createOptions(R.range(21, 31)) },
];

export const optionsLongLabel = R.pipe(
  R.map(x => ({ value: x, label: `Option ${x}` })),
  R.insert(3, { value: 'long', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' })
)(R.range(0, 15));

export function StoryWrapper (props) {
  return (
    <>
      <div>Windowed:</div>
      <WindowedSelect
        windowThreshold={0}
        {...props}
      />
      <div style={{ marginTop: 320 }}/>
      <div>Not windowed:</div>
      <WindowedSelect {...props} />
    </>
  );
}