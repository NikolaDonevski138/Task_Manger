import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import numeral from "numeral"

const UserListItem = ({
  id_vraboten,
  Ime,
  Prezime,
  Grad,
  Adresa,
  amount,
  createdAt,
  email,
  note,
  oddel,
  proekt
}) => (
  <div>
    <Link className="list-item" to={`/edit/${id_vraboten}`}>
      <div>
        <h3 className="list-item__title">{Ime + " " + Prezime}</h3>
        <span className="list-item__sub-title">
          {moment(createdAt).format("MMMM Do,YYYY")}
        </span>
      </div>

      <div>
        <h3 className="list-item__title black">Email:</h3>
        <span className="list-item__sub-title">{email}</span>
      </div>
      <div>
        <h3 className="list-item__title black">Oddel:</h3>
        <span className="list-item__sub-title">{oddel}</span>
      </div>
      <div>
        <h3 className="list-item__title black">Note:</h3>

        <span className="list-item__sub-title">{note}</span>
      </div>
      <div>
        <h3 className="list-item__title black">Proekt:</h3>

        <span className="list-item__sub-title">{proekt}</span>
      </div>
    </Link>
  </div>
)

export default UserListItem //UserListItem

//15 lane <h3 className="list-item__data">{numeral(amount/100).format('$0,0.00')}</h3>
