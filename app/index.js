var USER_DATA = {
	name: 'Ananya Mishra',
	username: 'ananya77041',
	image: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/13087506_10206069987739222_1077395723295857058_n.jpg?oh=80d99798b8095523475b3c908dfc4dc5&oe=57D67034'
}

var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes');

// var ProfilePic = React.createClass({
// 	render: function() {
// 		return <img src = {this.props.imageUrl} style={{height: 100, width: 100}} />
// 	}
// });

// var Link = React.createClass({
// 	changeURL: function() {
// 		window.location.replace(this.props.href)
// 	},
// 	render: function() {
// 		return (
// 			<span 
// 				style={{color: 'blue', cursor: 'pointer'}}
// 				onClick={this.changeURL}>
// 				{this.props.children}
// 			</span>
// 		)
// 	}
// });

// var ProfileLink = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<Link href = {'http://www.github.com/' + this.props.username}>
// 					{this.props.username}
// 				</Link>
// 			</div>
// 		) 
// 	}
// });

// var ProfileName = React.createClass({
// 	render: function() {
// 		return (
// 			<div>{this.props.name}</div>
// 		)
// 	}
// });

// var Avatar = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<ProfilePic imageUrl={this.props.user.image} />
// 				<ProfileName name={this.props.user.name} />
// 				<ProfileLink username={this.props.user.username} />
// 			</div>
// 		)
// 	}
// });


// ReactDOM.render(
// 	<Avatar user={USER_DATA}/>,
// 	document.getElementById('app')
// );

ReactDOM.render(
	routes,
	document.getElementById('app')
);