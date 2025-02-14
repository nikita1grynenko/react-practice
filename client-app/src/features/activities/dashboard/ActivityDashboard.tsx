import {Grid} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity.ts";
import ActivityList from "./ActivityList.tsx";
import ActivityDetails from "../details/ActivityDetails.tsx";
import ActivityForm from "../form/ActivityForm.tsx";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props) {
    return (
        <>
            <Grid>
                <Grid.Column width="10">
                    <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
                </Grid.Column>
                <Grid.Column width="6">
                    {selectedActivity && !editMode &&
                    <ActivityDetails 
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity} 
                        openForm={openForm}
                    />}
                    {editMode &&
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>}
                </Grid.Column>
            </Grid>
        </>
    )
}