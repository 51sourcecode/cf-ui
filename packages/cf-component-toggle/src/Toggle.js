const React = require('react');
const {PropTypes} = React;

class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.checked);
  }

  render() {
    let className = 'cf-toggle';

    if (this.props.value) {
      className += ' cf-toggle--active';
    }

    return (
      <label htmlFor={this.props.name} className={className}>
        <input
          className="cf-toggle__checkbox"
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
          checked={this.props.value}
          onChange={this.handleChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}/>
        <span className="cf-toggle__label">
          {this.props.label}
        </span>
        <span className="cf-toggle__handle"/>
      </label>
    );
  }
}

Toggle.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([false])
  ]).isRequired,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

module.exports = Toggle;
