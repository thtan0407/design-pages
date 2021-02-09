$(document).ready(function () {
	// Xử lý form
	var setHeightLoading = function () {
		$('.table-wrapper .table-loading').css('height', $('.table-wrapper .table').height());
		$(".table-loading").show();
	};
	
	$('#formSearch').submit(function (e) {
		e.preventDefault();
		// Function loading
		setHeightLoading();
		// Append Html
		let html = '';
		setTimeout(function () {
			html += `<tr>
						<td>2</td>
						<td>26-01-2021 - 09:05:13</td>
						<td>Lê Hải Đoàn</td>
						<td>19521548752</td>
						<td class="text-right">1.000.000.000</td>
						<td class="text-left">Chuyển khoản sang ngân hàng</td>
					</tr>`;
			$('#tableData tr:nth-of-type(1)').after(html);
			$(".table-loading").hide();
		}, 250)
	});

	//	Login
	$('.input-effect').blur(function () {
		$(this).val() != '' ? $(this).addClass('valid') : $(this).removeClass('valid');
	});
})