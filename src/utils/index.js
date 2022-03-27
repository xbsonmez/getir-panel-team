export const onDropHelper = (ev, status, tasks, card) => {
       let tempList = tasks.filter(item => {
           if(item.id === card.id) {
               debugger;
               item.completed=status;
               switch(status){
                   case 'completed':
                        item.completed=true;
                        break;
                    case 'todo':
                        item.completed=false;
                        break;
                    default:
                        break;
               }
               return item;
           }
           return item;
       });
    return tempList;
  };
  