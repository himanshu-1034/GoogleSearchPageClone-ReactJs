import "./SearchPage.css";
import React from "react";
import { useStateValue } from "../stateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Logo from "../images/googleLogo.png";
import Search from "../components/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  SearchOutlined,
} from "@material-ui/icons";

export default function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  //   const data = Response;
  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchpage_header">
        <Link to="/">
          <img className="searchpage_logo" src={Logo} />
        </Link>
        <div className="searchpage_header-body">
          <Search hideButtons />
          <div className="searchpage_options">
            <div className="searchpage_options-left">
              <div className="searchpage_option">
                <SearchOutlined />
                <Link to="/all">all</Link>
              </div>
              <div className="searchpage_option">
                <Description />
                <Link to="/news">news</Link>
              </div>
              <div className="searchpage_option">
                <Image />
                <Link to="/image">images</Link>
              </div>
              <div className="searchpage_option">
                <LocalOffer />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchpage_option">
                <Room />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchpage_option">
                <MoreVert />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchpage_options-right">
              <div className="searchpage_option">
                <Link to="/settings">settings</Link>
              </div>
              <div className="searchpage_option">
                <Link to="/tools">tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchpage_results">
          <p className="searchpage_results-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => {
            return (
              <div className="searchpage_result">
                <a
                  target="_blank"
                  href={item.link}
                  className="searchpage_displaylink"
                >
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchpage_resultImage"
                        src={item.pagemap?.cse_image[0]?.src}
                      />
                    )}
                  {item.displayLink} ^
                </a>
                <a
                  target="_blank"
                  className="searchpage_resultTitle"
                  href={item.link}
                >
                  <h2>{item.title}</h2>
                </a>
                <p className="searchpage_resultSnippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
