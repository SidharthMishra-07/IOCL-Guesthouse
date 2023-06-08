import "./propertyList.css";
import useFetch from "../../hooks/useFetch";
import Spinner from "../loading/Spinner";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/guesthouse/countByType");
  console.log(data);
  const images = [
    "https://content.jdmagicbox.com/comp/delhi/n8/011pxx11.xx11.000460266758.z8n8/catalogue/indian-oil-corporation-guest-house-safdarjung-development-area-delhi-hotels-38ipd5w-250.jpg",
    "https://content.jdmagicbox.com/comp/bangalore/b7/080pxx80.xx80.181127221440.w1b7/catalogue/iocl-bangalore-guest-house-richmond-road-bangalore-guest-house-6ox3lg9637.jpg",
    "https://images.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.210102161255.s4j6/catalogue/hotel-ratiram-palace-noida-sector-18-noida-guest-house-1eq85eu1li.jpg",
    "https://content.jdmagicbox.com/comp/chennai/70/044p3038570/catalogue/ioc-guest-house-nungambakkam-chennai-guest-house-lqn88l-250.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        <div className="center">
          <Spinner />
        </div>
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} - {data[i]?.type} Rooms</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
