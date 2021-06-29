import React from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name} 입니다. <br />
//       children 값은 {children} 입니다.
//     </div>
//   );
// };

export default class MyComponent extends React.Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <React.Fragment>
        <div>
          안녕하세요 제 이름은 {name} 입니다. <br />
          children 값은 {children} 입니다. <br />
          제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
      </React.Fragment>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

//이렇게 설정하면 name 값은 무조건 문자열 형태로 전달해야 된다는 것을 의미합니다.
// export default MyComponent;
