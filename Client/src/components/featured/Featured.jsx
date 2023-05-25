import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data, loading, error} = useFetch(
    "/guesthouse/countByCity?cities=delhi,chennai,mumbai,vadodara,panipat,guwahati,paradip,bhubaneshwar,hyderabad,bangalore,pune,gwalior,noida"
  );
  console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Ubcity2.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[0]} Guesthouses</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} Guesthouses</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/14/d9/98/very-nice-outside.jpg?w=500&h=300&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chennai</h1>
              <h2>{data[2]} Guesthouses</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
