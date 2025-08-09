using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MyJwtbymyselv.Migrations
{
    /// <inheritdoc />
    public partial class Sub : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Проверка и удаление SubscribePlans
            migrationBuilder.Sql(@"
                IF OBJECT_ID('SubscribePlans', 'U') IS NOT NULL
                    DROP TABLE SubscribePlans;
            ");

            // Проверка и удаление UserSubscriptions
            migrationBuilder.Sql(@"
                IF OBJECT_ID('UserSubscriptions', 'U') IS NOT NULL
                    DROP TABLE UserSubscriptions;
            ");

            migrationBuilder.CreateTable(
                name: "userSubPlan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userSubPlan", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "userSub",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubscriptionId = table.Column<int>(type: "int", nullable: false),
                    SubscribePlanId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userSub", x => x.Id);
                    table.ForeignKey(
                        name: "FK_userSub_userSubPlan_SubscribePlanId",
                        column: x => x.SubscribePlanId,
                        principalTable: "userSubPlan",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "userSubPlan",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Basic" },
                    { 2, "Mid" },
                    { 3, "Pro" },
                    { 4, "Athlet" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_userSub_SubscribePlanId",
                table: "userSub",
                column: "SubscribePlanId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "userSub");

            migrationBuilder.DropTable(
                name: "userSubPlan");

            migrationBuilder.CreateTable(
                name: "SubscribePlans",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubscribePlans", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserSubscriptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubscriptionId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSubscriptions", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "SubscribePlans",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Basic" },
                    { 2, "Mid" },
                    { 3, "Pro" },
                    { 4, "Athlet" }
                });
        }
    }
}
