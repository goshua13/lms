const teams = {
  byId: {
    team1: {
      id: "team1",
      name: "gibby team",
      coach: "gibralter",
      phone: "123-475-6789",
      noPlayers: 20,
    },
    team2: {
      id: "team2",
      name: "lifeline team",
      coach: "lifeine",
      phone: "123-475-6789",
      noPlayers: 15,
    },
    team3: {
      id: "team3",
      name: "wraith team",
      coach: "wraith",
      phone: "123-475-6789",
      noPlayers: 30,
    },
    team4: {
      id: "team4",
      name: "mirage team",
      coach: "mirage",
      phone: "123-475-6789",
      noPlayers: 12,
    },
    team5: {
      id: "team5",
      name: "newcastle team",
      coach: "gibrnewcastlealter",
      phone: "123-475-6789",
      noPlayers: 23,
    },
    team6: {
      id: "team6",
      name: "valkrie team",
      coach: "valkrie",
      phone: "123-475-6789",
      noPlayers: 45,
    },
  },
  allIds: ["team1", "team2", "team3", "team4", "team5", "team6"],
};

let currentTeamId = null;
$(document).ready(function () {
  const tableBody = $("#teams-table tbody");
  teams.allIds.forEach((id, i) => {
    const team = teams.byId[id];
    tableBody.append(
      `<tr id="team-id-${id}" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
            <td>${i + 1}</td>
            <td>${team.name}</td>
            <td class="text-capitalize">${team.coach}</td>
            <td>${team.phone}</td>
            <td>${team.noPlayers}</td>
            <td>${team.phone}</td>
            <td>
                <div>
                    <button class="btn btn-primary">Edit</button>
                    <button id="deleteBtn-${id}" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="bi bi-trash"></i>
                      Delete
                    </button>
                </div>
            </td>
        </tr>`
    );
    $(`#deleteBtn-${id}`).on("click", function () {
      $("#team-to-delete").text(team.name);
      currentTeamId = id;
    });
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $("img .rounded").animate({ scale: "1" }, "slow");
});

function deleteTeam() {
  $(`#team-id-${currentTeamId}`).remove();
  $("#deleteToast #team-to-delete").text(teams.byId[currentTeamId].name);
  $("#deleteToast").toast("show");
}
