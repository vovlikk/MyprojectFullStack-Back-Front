using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyJwtbymyselv.Migrations
{
    /// <inheritdoc />
    public partial class NewDataForSub : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_userSub_userSubPlan_SubscribePlanId",
                table: "userSub");

            migrationBuilder.DropIndex(
                name: "IX_userSub_SubscribePlanId",
                table: "userSub");

            migrationBuilder.DropColumn(
                name: "SubscribePlanId",
                table: "userSub");

            migrationBuilder.CreateIndex(
                name: "IX_userSub_SubscriptionId",
                table: "userSub",
                column: "SubscriptionId");

            migrationBuilder.AddForeignKey(
                name: "FK_userSub_userSubPlan_SubscriptionId",
                table: "userSub",
                column: "SubscriptionId",
                principalTable: "userSubPlan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_userSub_userSubPlan_SubscriptionId",
                table: "userSub");

            migrationBuilder.DropIndex(
                name: "IX_userSub_SubscriptionId",
                table: "userSub");

            migrationBuilder.AddColumn<int>(
                name: "SubscribePlanId",
                table: "userSub",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_userSub_SubscribePlanId",
                table: "userSub",
                column: "SubscribePlanId");

            migrationBuilder.AddForeignKey(
                name: "FK_userSub_userSubPlan_SubscribePlanId",
                table: "userSub",
                column: "SubscribePlanId",
                principalTable: "userSubPlan",
                principalColumn: "Id");
        }
    }
}
