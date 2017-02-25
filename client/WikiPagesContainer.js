import {connect} from 'react-redux';
import {WikiPages} from './WikiPages';

const mapStateToProps = (state) => {
  return {
    allWikiPages: state.allWikiPages
  };
};

export default connect(mapStateToProps)(WikiPages);
