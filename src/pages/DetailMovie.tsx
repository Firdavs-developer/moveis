import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { axiosInstance } from "../axiosInstance";
import { Typography } from "antd";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
const { Title } = Typography

function DetailMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading,  data: movie } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => axiosInstance.get(`/movie/${id}`).then(res => res.data)
  })

  if(isLoading) return <Loading/>

  
  

  return (
    <div className="detail">
      <div className="container">
        <div className="detail-content">
          <div className="detail-img">
            <img style={{ width: '400px', height: '400px', }} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="poster path" />
          </div>
          <div className="detail-info">
            <Title>{movie?.title}</Title>
            <Title level={5}>Release date: {movie?.release_date}</Title>
            <Title level={5}>{movie?.overview}</Title>
            <Title level={5}>{movie?.tagline}</Title>
            <div className="rating">
              <Title level={4}>Rating:{movie?.vote_average} <img style={{ width: '20px', height: '20px', }} src="/public/star.png" alt="" /></Title>
              <button onClick={() => navigate(-1)}>Go to Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMovie