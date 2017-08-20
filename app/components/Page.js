import Footer from './Footer';
import Header from './Header';

import '../styles/global.scss';

const Page = (props) => {
  return (
    <div className="banner-image">
      <div className="overlay">
        <Header />
          {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Page;