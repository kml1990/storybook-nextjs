import React from 'react';
import Home, { getServerSideProps } from '../../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
  // args: {
  //   name: 'Hi'
  // }
}

export const HomePage = (args, { loaded: { name }}) => <Home {...args} name={name} />

// HomePage.args = {
//   name: 'Kamil'
// }
HomePage.loaders = [
  async () => {
    let data = await getServerSideProps();
    return data.props;
  }
]