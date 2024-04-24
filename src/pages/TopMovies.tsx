import { Row, Col, Card } from 'antd';
import { useQuery } from 'react-query';
import { axiosInstance } from '../axiosInstance';
import Title from 'antd/es/typography/Title';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

interface IMovies {
  id: number
  name: string,
  backdrop_path: string,
  poster_path: string,
  title: string
}


const TopMovies = () => {

  const {data: movies, isLoading, error } = useQuery({
    queryKey: ['top_rated'],
    queryFn: () => axiosInstance.get('/movie/top_rated').then(res => res.data)
  });

  if(isLoading) return <Loading/>
  if(error instanceof Error) return <h1>{error.message}</h1>
  
 
  
  
  return (
    <>
      {/* <SearchMovie movies={movies} setPopular={setPopular}/>     */}
      <Row gutter={[16, 16]} style={{ padding: "20px", }}>
        <div className='container'>
         {movies.results.map((movie: IMovies) => (
            <Col className='col-movie' xs={24} sm={12} md={8} lg={6} >
              <Link to={`/popular/${movie.id}`}>
                <Card className='col-card'  cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} style={{ height: "300px", width: '300px', marginTop: '20px', cursor: "pointer" }} />}>
                  <Title className='title' level={3}>{movie?.title.length > 20 ? `${movie.title.slice(0, 20)}...` : movie.title}</Title>
                </Card>
              </Link>
            </Col>
          ))} 
        </div>
      </Row>
    </>
  );
};

export default TopMovies;