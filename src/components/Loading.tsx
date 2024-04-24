import React from 'react';
import {  Flex, Spin } from 'antd';

const Loading: React.FC = () => (
  <Flex gap="large" vertical> 
    <div className='loading'>
      <Spin   size="large">
        <div className="content" />
      </Spin>    
    </div>   
  </Flex>
);

export default Loading;