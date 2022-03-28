export const onDropHelper = (status, tasks, card) => {
       let tempList = tasks.filter(item => {
           if(item.id === card.id) {
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
  