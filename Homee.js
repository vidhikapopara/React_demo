import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Table, Button } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>CRUD operations</h3>
        <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Information</th>
                    <th>Price</th>
                    <th>Compnay</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={value.title}
                        onChange={(e) => {
                          value.updateValue(e, "title");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.info}
                        onChange={(e) => {
                          value.updateValue(e, "info");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.price}
                        onChange={(e) => {
                          value.updateValue(e, "price");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.company}
                        onChange={(e) => {
                          value.updateValue(e, "company");
                        }}
                      />
                    </td>
                    <td>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          value.onSave(value.id);
                        }}
                      >
                        {value.id ? "Save" : "Add New "}
                      </Button>
                    </td>
                  </tr>
                  {value.AllData.map((product) => {
                    return (
                      <tr>
                        <td>{product.title}</td>
                        <td>{product.info}</td>
                        <td>{product.price}</td>
                        <td>{product.company}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              value.onEdit(product.id);
                            }}
                          >
                            Edit
                          </Button>
                          |
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => {
                              value.onDelete(product.id);
                            }}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
