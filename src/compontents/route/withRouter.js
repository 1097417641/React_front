import React from "react";
import {useParams, useLocation, useNavigate} from 'react-router-dom'

export default function withRouter(Component) {
  return (props) => (
    <Component
      {...props}
      params={useParams()}
      location={useLocation()}
      navigate={useNavigate()}
    />
  );
}

