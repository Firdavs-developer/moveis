import { Row, Col, Card } from 'antd';
import { useQuery } from 'react-query';
import { axiosInstance } from '../axiosInstance';
import Title from 'antd/es/typography/Title';
import { Link } from 'react-router-dom';
import SearchMovie from '../components/SearchMovie';
import Loading from '../components/Loading';
import { useState } from 'react';

export interface IMovies {
  id: number
  name: string,
  backdrop_path: string,
  poster_path: string,
  title: string
  
}


const PopularMovies = () => {

  const [ popular, setPopular] = useState< null | IMovies[]>(null);

  const {data: movies, isLoading, error } = useQuery({
    queryKey: ['tv/popular'],
    queryFn: () => axiosInstance.get('/tv/popular').then(res =>res.data)
  });

  if(isLoading) return <Loading/>
  if(error instanceof Error) return <h1>{error.message}</h1>   
  
  // console.log(popular);
  console.log(movies);
  
  
  return (
    <>
      <SearchMovie movies={movies} setPopular={setPopular}/>  

        
      <Row gutter={[16, 16]} style={{ padding: "20px", }}>
        <div className='container'>
          {popular ? popular?.map((movie: IMovies) => (
            <Col key={movie.id} className='col-movie'>
              <Link to={`/popular/${movie.id}`}>
                <Card className='col-card'  cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} style={{ height: "300px", width: '300px',  cursor: "pointer" }} />}>
                  <Title className='title' level={3}>{movie.name.length > 20 ? `${movie.name.slice(0, 20)}...` : movie.name}</Title>
                </Card>
              </Link>
            </Col>
          )) : movies.results.map((movie: IMovies) => (
            <Col key={movie.id} className='col-movie'>
              <Link to={`/popular/${movie.id}`}>
                <Card className='col-card'  cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} style={{ height: "300px", width: '300px',  cursor: "pointer" }} />}>
                  <Title className='title' level={3}>{movie.name.length > 20 ? `${movie.name.slice(0, 20)}...` : movie.name}</Title>
                </Card>
              </Link>
            </Col>
          )) }         
        </div>
      </Row>
    </>
  );
};

export default PopularMovies;
