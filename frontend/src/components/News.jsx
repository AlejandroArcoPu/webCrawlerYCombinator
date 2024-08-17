const News = ({newsToShow}) => {
    return(
        <table>
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Title</th>
            <th scope="col">Points</th>
            <th scope="col">Comments</th>
          </tr>
        </thead>
        <tbody>
          {newsToShow.map((n) => 
          <tr key={n.pos}>
            <td>{n.pos}</td>
            <td>{n.title}</td>
            <td>{n.points}</td>
            <td>{n.comments}</td>
          </tr>)}
        </tbody>
      </table>
    )
}

export default News