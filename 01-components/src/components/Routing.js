import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Routing Challenges
import Img from "./routing/Img";
import Paginiation from "./routing/Pagination";
import People from "./routing/People";
import Header from "./routing/Header.js";
import Paragraph from "./routing/Paragraph.js";
import Square from "./events/Square.js";
import StepCounter from "./routing/StepCounter";
import FourOhFor from "./routing/FourOhFor";

export default function Routing() {
	return (
		<>
			<Router>
				<>
					<Header>Awesome Page Title</Header>
					<Switch>
						{/* no props */}
						<Route exact path="/paragraph">
							<Paragraph>
								"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet, consectetur, adipisci velit, sed quia non numquam eius
								modi tempora incidunt ut labore et dolore magnam aliquam quaerat
								voluptatem. Ut enim ad minima veniam, quis nostrum
								exercitationem ullam corporis suscipit laboriosam, nisi ut
								aliquid ex ea commodi consequatur? Quis autem vel eum iure
								reprehenderit qui in ea voluptate velit esse quam nihil
								molestiae consequatur, vel illum qui dolorem eum fugiat quo
								voluptas nulla pariatur?"
							</Paragraph>
						</Route>
						<Route exact path="/square">
							<Square colour="blue" />
						</Route>
						<Route exact path="/cat">
							<Img />
						</Route>

						{/* with props */}

						<Route path="/people">
							<People names={["Rohan", "Tom", "Zack", "G", "Dean"]} />
						</Route>
						<Route exact path="/stepcounter">
							<StepCounter max={100} step={5} />
						</Route>
						<FourOhFor />
					</Switch>
					<Paginiation
						pages={["people", "stepcounter", "square", "cat", "paragraph"]}
					/>
				</>
			</Router>
		</>
	);
}
