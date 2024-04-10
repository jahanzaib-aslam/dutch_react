import React from "react";
import { FaSearch } from "react-icons/fa";
import { Accordion } from "react-bootstrap";

const Filter = (categoryList) => {
  const Price = [
    { name: "All" },
    { name: "€5" },
    { name: "€5 - €10" },
    { name: "€15 - €20" },
    { name: "€25 - €20" },
    { name: "€35 - €30" },
    { name: "€45 - €40" },
    { name: "€55 - €50" },
    { name: "€65 - €60" },
    { name: "€75 - €70" },
    { name: "€85 - €80" },
    { name: "€95 - €90" },
    { name: "€100- €100" },
  ];
  return (
    <div className="filters">
      <div className="inner">
        <div className="colu">
          <div className="filterySearch">
            <input type="text" class="form-control" placeholder="Search" />
            <span className="icon">
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="colu">
          <div className="filteryDrop">
            {categoryList.categories && (
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categories</Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-group">
                      {categoryList.categories.map((category, index) => (
                        <li
                          key={index}
                          className={
                            index === 0
                              ? "list-group-item selected"
                              : "list-group-item"
                          }
                        >
                          <div className="list-group-span">
                            {category.title}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}
          </div>
        </div>
        <div className="colu">
          <div className="filteryDrop">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Price filter</Accordion.Header>
                <Accordion.Body>
                  <ul className="list-group">
                    {Price.map((Price, index) => (
                      <li
                        key={index}
                        className={
                          index === 0
                            ? "list-group-item selected"
                            : "list-group-item"
                        }
                      >
                        <div className="list-group-span">{Price.name}</div>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
