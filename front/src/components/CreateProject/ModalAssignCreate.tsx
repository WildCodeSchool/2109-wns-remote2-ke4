import React from 'react';
import Fade from '@mui/material/Fade';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { onDragEnd } from '../../libs/onDragEnd';
import {
  AvatarStyles,
  CardDev,
  Column,
  ColumnDev,
  ModalStyles,
  PaperModal,
} from '../../elements/ModalAssignDev.styles';

const ModalAssignCreateProject: React.FC<{
  open: boolean;
  handleClose: () => void;
  columns: {
    [x: string]: {
      name: string;
      items: {
        id: string;
        image: string;
        name: string;
      }[];
    };
  };
  setColumns: any;
}> = ({ open, handleClose, columns, setColumns }) => {
  return (
    <ModalStyles
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <PaperModal>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <ColumnDev key={columnId}>
                  <h2>{column.name}</h2>
                  <div style={{ margin: 0 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <Column
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <CardDev
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          backgroundColor: snapshot.isDragging
                                            ? '#000'
                                            : '#72caa9',
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <AvatarStyles
                                          src={item?.image}
                                          alt="logo"
                                        />
                                        {item.name}
                                      </CardDev>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </Column>
                        );
                      }}
                    </Droppable>
                  </div>
                </ColumnDev>
              );
            })}
          </DragDropContext>
        </PaperModal>
      </Fade>
    </ModalStyles>
  );
};
export default ModalAssignCreateProject;
