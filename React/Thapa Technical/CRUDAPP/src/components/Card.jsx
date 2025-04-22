import { deletePost } from '../api/PostApi';

const Card = ({ crrVal, setData, data, setUpdateData}) => {
    const {id, title, body } = crrVal;
    
    const handleDelete = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const newData = data.filter((currPost) => {
                    return currPost.id !== id;
                });

                setData(newData)

            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (crrVal) => setUpdateData(crrVal) ;
  return (
    <div>
        <p>Title : {title}</p>
        <p>{body}</p>
        <button onClick={() => handleEdit(crrVal)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default Card