import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import classes from "./index.module.scss"
import { Rotate } from 'react-awesome-reveal';

const Breadcrumbs = ( { breadcrumbItems,title }) => {
    return (
        <section className={classes.breadcrumbOption}>
        <div className="container">
          <Rotate>
          <div className="row">
            <div className="col-lg-12">
              <div className={classes.breadcrumbText}>
                <h4>{title}</h4>
                <div className={classes.breadcrumbLinks}>
                  <Breadcrumb>
                    {breadcrumbItems.map((item, index) => (
                      <Breadcrumb.Item key={index} href={item.href} className={classes.breadcrumbItem}>
                        {item.title}
                        <span>{item.text}</span>
                      </Breadcrumb.Item>
                    ))}
                  </Breadcrumb>
                </div>
              </div>
            </div>
          </div>
          </Rotate>
        </div>
      </section>

      );
    }


export default Breadcrumbs
