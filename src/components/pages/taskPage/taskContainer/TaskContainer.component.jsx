import React from "react";
import style from "./taskContainer.module.css";

import TaskItem from "./taskItem/TaskItem.component";

import { DataSearch, ReactiveList, ResultList } from '@appbaseio/reactivesearch';


const TaskContainer = props => {
  return (
    <div className={`${style.task_container}`}>
      <div className={style.task_list}>
      <DataSearch
      className={style.task_list}
          componentId="nameReactor"
          placeholder="Search for Restaurants, Bars"
          dataField="name"
          searchInputId="NameSearch"
          iconPosition="right"
          renderError={error => (
            <div>
              Something went wrong with DataSearch
              <br />
              Error details
              <br />
              {error}
            </div>
          )}
        />
      <ReactiveList
  componentId="queryResult"
  dataField="name"
  from={0}
  size={15}
  renderItem={(item) => (
      <ReactiveList.ResultListWrapper>
        <ResultList key={item._id}>
          <ResultList.Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToOCwch7uuEuNEQwQxhF8MkgD4MPImyklOdVpyE2VYKvi54AMn' />
          <ResultList.Content>
            <ResultList.Title>{item.name}</ResultList.Title>
            <ResultList.Description>
              <div>
                <p>{item.address}</p>
                <span key="currency" className="tag">
                  {item.currency}
                </span>
                <span className="tag">{item.cuisine}</span>
                <div>Avg. Customer Reviews : {item.stars}</div>
              </div>
            </ResultList.Description>
          </ResultList.Content>
        </ResultList>
      </ReactiveList.ResultListWrapper>
  )}
  pagination={true}
  react={{
    and: [
      "currencyReactor",
      "ratingsReactor",
      "cuisineReactor",
      "deliveringNowReactor",
      "bookingReactor",
      "deliveryReactor",
      "tableBookinReactor",
      "nameReactor",
      "RangeSliderSensor"
    ]
  }}
  renderError={error => (
    <div>
      Something went wrong with ResultList!
      <br />
      Error details
      <br />
      {error}
    </div>
  )}
/>
      
      </div>
    </div>
  );
};

export default TaskContainer;





// {props.taskList.map(task => (
//   <TaskItem
//     img={task.img}
//     userName={task.userName}
//     description={task.description}
//     map={task.distance}
//     timer={task.timer}
//     title={task.title}
//     cost={task.cost}
//     data={task.data}
//   />
// ))}