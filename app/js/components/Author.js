import React from "react";
import Relay from "react-relay";
class Author extends React.Component {

    render() {
        const {firstName, lastName} = this.props.author;
        return (
            <td>
                {firstName} {lastName}
            </td>
        );
    }
}

export default Relay.createContainer(Author, {
    fragments: {
        author: () => Relay.QL `
        fragment author on Author {
            firstName
            lastName
        }
        `
    }
});
