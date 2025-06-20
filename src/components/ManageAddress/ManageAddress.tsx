/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 03/06/2025 13:44:54
*/
import React, { FC, useEffect, useState } from "react";
import "./ManageAddress.css";
import AddressForm from "../AddressForm/AddressForm";
import { deleteData, searchDatas } from "../../api/entity";
import { resquestResponse } from "../../models/resquestResponse";
import { useDispatch } from "react-redux";
import { ADD_NOTIFICATION } from "../../redux/actions/actionType";
import { generateId } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { getUserId } from "../../redux/selectors/selectors";
import { Address } from "../../models/address";

interface ManageAddressProps {
  updateAddresses?: (data: Address[]) => void;
  checkout?: boolean;
}

const ManageAddress: FC<ManageAddressProps> = ({
  updateAddresses,
  checkout,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const userId = useSelector(getUserId);
  const [currentAddress, setCurrentAddress] = useState<Address | undefined>();
  const dispatch = useDispatch();

  useEffect(() => {
    // window.scrollTo(0, 0);
    const runLocalData = async () => {
      let query = "user=" + userId;
      const data: resquestResponse = await searchDatas("address", query);
      if (data.isSuccess) {
        setAddresses(data.results as Address[]);
        if (updateAddresses) {
          updateAddresses(data.results as Address[]);
        }
        setLoading(true);
      }
    };
    runLocalData();
  }, [isLoading, openForm]);

  const handleEdit = (event: any, address: Address) => {
    setCurrentAddress(address);
    setOpenForm(true);
  };
  const handleDelete = async (event: any, address: Address) => {
    if (address._id) {
      await deleteData("address", address._id);
      const newAddresses = addresses.filter(
        (current) => current._id !== address._id
      );
      setAddresses(newAddresses);
      dispatch({
        type: ADD_NOTIFICATION,
        payload: {
          _id: generateId(),
          message: "Address deleted !",
          status: "success",
          timeout: 2000,
        },
      });
    }
  };

  const handleCancel = () => {
    setOpenForm(false);
    setCurrentAddress(undefined);
  };

  return (
    <div className="ManageAddress">
      {openForm ? (
        <AddressForm address={currentAddress} cancel={handleCancel} />
      ) : (
        <>
          <a
            // href="#"
            className="btn btn-fill-out"
            onClick={() => setOpenForm(true)}
          >
            Add New Adress
          </a>
          {addresses.length && !checkout ? (
            <div className="card">
              <div className="card-header">
                <h3>Your Addresses</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Address</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addresses.map((address, index) => {
                        return (
                          <tr key={address._id}>
                            <td>#{index + 1}</td>
                            <td>
                              {address.name} {address.street} -
                              {address.code_postal}- {address.state}
                            </td>
                            <td className="col-sm-6 col-md-6 col-lg-6">
                              {/* <td > */}
                              <a
                                // href="#"
                                className="btn btn-fill-out btn-sm  "
                                onClick={(event) => handleEdit(event, address)}
                              >
                                Edit
                              </a>
                              <a
                                // href="#"
                                className="btn btn-fill-out btn-sm   "
                                onClick={(event) =>
                                  handleDelete(event, address)
                                }
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
      {/* <div className="row">
        <div className="col-lg-6">
          <div className="card mb-3 mb-lg-0">
            <div className="card-header">
              <h3>Billing Address</h3>
            </div>
            <div className="card-body">
              <address>House #15<br />Road #1<br />Block #C <br />Angali <br /> Vedora <br />1212
              </address>
              <p>New York</p>
              <a href="#" className="btn btn-fill-out">Edit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3>Shipping Address</h3>
            </div>
            <div className="card-body">
              <address>House #15<br />Road #1<br />Block #C <br />Angali <br /> Vedora <br />1212
              </address>
              <p>New York</p>
              <a href="#" className="btn btn-fill-out">Edit</a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ManageAddress;
