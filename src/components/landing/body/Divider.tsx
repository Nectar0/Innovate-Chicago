import * as React from "react"
import styles from "./Divider.module.css"
import DividerCell from "./DividerCell";
const Divider: React.FC<{}> = (props) => {
    return (
        <div className={"bg-gradient-to-tl py-5 flex justify-center from-[#23a6d5] to-[#23d5ab]"}>
            <div className={"text-left max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <div className="flex flex-col md:flex-row w-full gap-10 md:gap-36 py-5">
                    <DividerCell
                        number={"100-125"}
                        title={"Expected Participants"}
                    />
                    <DividerCell
                        number={"12"}
                        title={"Hour Hackathon"}
                    />
                    <DividerCell
                        number={"$42000+"}
                        title={"Total Giveaways + Prizes"}
                    />
                </div>
            </div>

        </div>
    );
}
export default Divider