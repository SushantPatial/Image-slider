var count = 0;

$(".slider-right").on("click", function()
{
  $('.slides').animate({"margin-left":"-=720"}, 1000);

  count++;

  if (count == 5)
  {
    $('.slides').animate({"margin-left":"+=3600"}, 0);
    count = 0;
  }
});

$(".slider-left").on("click", function()
{
  $('.slides').animate({"margin-left":"+=720"}, 1000);

  if (count == 0)
  {
    $('.slides').animate({"margin-left":"-=3600"}, 0);
    count = 5;
  }

  count--;
});