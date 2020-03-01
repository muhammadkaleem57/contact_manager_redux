import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT
} from './types'
import Axios from 'axios'

export const getContacts = () => dispatch => {
	Axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
		dispatch({
			type: GET_CONTACTS,
			payload: response.data
		})
	})
}

export const getContact = id => dispatch => {
	Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(
		response => {
			dispatch({
				type: GET_CONTACT,
				payload: response.data
			})
		}
	)
}

export const deleteContact = id => dispatch => {
	try {
		Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(
			response => {
				dispatch({
					type: DELETE_CONTACT,
					payload: id
				})
			}
		)
	} catch (error) {
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		})
	}
}

export const addContact = contact => dispatch => {
	Axios.post('https://jsonplaceholder.typicode.com/users', contact).then(
		response => {
			dispatch({
				type: ADD_CONTACT,
				payload: response.data
			})
		}
	)
}

export const updateContact = contact => dispatch => {
	Axios.put(
		`https://jsonplaceholder.typicode.com/users/${contact.id}`,
		contact
	).then(response => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: response.data
		})
	})
}
