import React from 'react';
import { Input,  Row, Col } from 'antd';


const SearchMovie: React.FC = () => {
  return (
    <Row justify="center" style={{ margin: '20px 0' }}>
      <Col xs={24} sm={18} md={12} lg={8} xl={6}>
        <Input className='search-movie' style={{padding: '10px 15px'}}
          placeholder="Search here..."
          allowClear
          size="large"
        />
      </Col>
    </Row>
  );
}

export default SearchMovie;