import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import styler      from 'react-styling'
import { title }   from 'react-isomorphic-render'

export default class Page extends Component
{
	render()
	{
		const markup =
		(
			<section className="notes">
				{title("Hartford")}
				<h1 style={style.header}>
					Daily Notes
				</h1>
				<table style={style.table}>
					<tbody>
						<tr>
							<th>Code</th>
							<th>Date</th>
							<th>Name <input /></th>
							<th>Time</th>
							<th>Signature</th>
							<th>
								<button>Add Note</button>
							</th>
						</tr>
						<tr>
							<td>
								<select>
									<option>None</option>
									<option>BO / BOWELS OPEN</option>
									<option>B / BATH</option>
									<option>BC / BED CHANGE</option>
								</select>
							</td>
							<td>
								<input type="date" />
							</td>
							<td>
								<textarea style={style.textarea}></textarea>
							</td>
							<td>
								<input type="time" />
							</td>
							<td>
								<input type="text" />
							</td>
							<td>
								<button>Delete Note</button>
							</td>
						</tr>
					</tbody>
				</table>
				<button>
					Print
				</button>
				<div>
					Code explaination
				</div>
			</section>
		)

		return markup
	}
}

const style = styler
`
	header
		text-align: center
		font-size: 2rem
	textarea
		width: 100%
	table
		width: 100%
`