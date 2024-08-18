const News = ({newsToShow}) => {
    return(
        <table className="shadow-2xl w-9/12 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr >
            <th scope="col" className="px-6 py-3">Position</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Points</th>
            <th scope="col" className="px-6 py-3">Comments</th>
          </tr>
        </thead>
        <tbody>
          {newsToShow.map((n) => 
          <tr className="bg-white border-b hover:bg-gray-50 " key={n.pos}>
            <td className="px-6 py-4">{n.pos}</td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{n.title}</td>
            <td className="px-6 py-4">{n.points}</td>
            <td className="px-6 py-4">{n.comments}</td>
          </tr>)}
        </tbody>
      </table>
    )
}

export default News