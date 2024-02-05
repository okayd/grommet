import React from 'react';

import { Data, DataSummary, DataTable, Grid, Paragraph } from 'grommet';

import { DataSearch } from '../DataSearch';
import { columns, DATA } from '../../DataTable/stories/data';

export const Responsive = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={...}>
  <Grid pad="large" columns={[['medium', 'large']]} justifyContent="center">
    <Paragraph color="text-weak">
      Note: Results are filtered as you type, checking all fields.
    </Paragraph>
    <Data data={DATA}>
      <DataSearch responsive />
      <DataSummary />
      <DataTable columns={columns} />
    </Data>
  </Grid>
  // </Grommet>
);

Responsive.args = {
  full: true,
};

export default {
  title: 'Data/DataSearch/Responsive',
};
