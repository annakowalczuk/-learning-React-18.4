var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        file: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        file: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    },
    {
        id: 3,
        title: 'Mała Syrenka',
        desc: 'film o syrence',
        file: 'https://as2.ftcdn.net/jpg/01/63/27/81/500_F_163278129_S1CSdDGiQWhzXXdRHfkMAf95gR1nY8wq.jpg'
    },
    {
        id: 4,
        title: 'Braveheart',
        desc: 'film o przywódcy szkockiego powstania przeciwko rządom Anglii',
        file: 'https://as1.ftcdn.net/jpg/00/01/49/38/500_F_1493842_6ZJhIXI1zwPeFz6YnciB8Shf7vFzaY.jpg'
    },
    {
        id: 5,
        title: 'Titanic',
        desc: 'film o zatonięciu statku',
        file: 'https://as2.ftcdn.net/jpg/01/57/10/79/500_F_157107915_LcIHyd3EuJD6WSIJkQ5iGpI8ywMYBLhM.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('li', {
                key: this.props.movie.id
            },
            React.createElement(MovieTitle, {
                title: this.props.movie.title
            }),
            React.createElement(MovieDesc, {
                description: this.props.movie.desc
            }),
            React.createElement(MovieImg, {
                img: this.props.movie.file
            })
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.description);
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('img', {
            src: this.props.img
        });
    }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {
        return React.createElement('ul', {},
            this.props.movies.map(function (item) {
                return React.createElement(Movie, {
                    key: item.id,
                    movie: item
                }, );
            })
        );
    }
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {movies: movies})
    );

ReactDOM.render(element, document.getElementById('app'));