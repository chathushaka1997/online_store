import React from 'react'
import useTags from '../../customHooks/useTags';
import { Link } from 'react-router-dom';

const ViewAllTags = () => {
    const { tags } = useTags();
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="fw-bolder d-inline-block text-primary">All Tags</h3>
        <Link className="btn btn-primary" to={`/add-tag`}>
          Add Tag
        </Link>
      </div>
      <div>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((brand, index) => (
              <tr key={brand?._id}>
                <th scope="row">{index + 1}</th>
                <td>{brand?.name}</td>
                <td>
                  <Link to={`/edit-tag/${brand?._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewAllTags