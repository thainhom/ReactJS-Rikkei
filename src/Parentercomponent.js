import React from "react";
class Parentercomponent extends React.Component {
  render() {
    let { user } = this.props;

    return (
      <>
        <div className="alluser">
          {user.map((item, index) => {
            return (
              <div key={item.id}>
                {item.lastname}-{item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Parentercomponent;
